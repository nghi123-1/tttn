CREATE DATABASE shopdb
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
USE shopdb;

-- 1. Bảng users
CREATE TABLE users (
  user_id VARCHAR(10) PRIMARY KEY,
  gender VARCHAR(10),
  age_group VARCHAR(20),
  created_at DATETIME,
  INDEX idx_users_created_at (created_at)
);

-- 2. Bảng products
CREATE TABLE products (
  product_id VARCHAR(10) PRIMARY KEY,
  name VARCHAR(255),
  category VARCHAR(50),
  price DECIMAL(12,2),
  brand VARCHAR(100),
  image_url TEXT,
  stock INT,
  created_at DATETIME,
  INDEX idx_products_category (category),
  INDEX idx_products_brand (brand),
  INDEX idx_products_created_at (created_at)
);

-- 3. Bảng stats
CREATE TABLE stats (
  product_id VARCHAR(10) PRIMARY KEY,
  views INT,
  clicks INT,
  cart_adds INT,
  purchases INT,
  conversion_rate DECIMAL(6,2),
  updated_at DATETIME
);

-- 4. Bảng recommendations
CREATE TABLE recommendations (
  rec_id VARCHAR(10) PRIMARY KEY,
  product_id VARCHAR(10),
  recommendation TEXT,
  reason TEXT,
  created_at DATETIME,
  INDEX idx_recommendations_product (product_id)
);

-- 5. Bảng orders
CREATE TABLE orders (
  order_id VARCHAR(10) PRIMARY KEY,
  user_id VARCHAR(10),
  order_date DATETIME,
  status VARCHAR(20),
  total_amount DECIMAL(12,2),
  order_status VARCHAR(50),
  INDEX idx_orders_user (user_id)
);

-- 6. Bảng order_items
CREATE TABLE order_items (
  item_id VARCHAR(10) PRIMARY KEY,
  order_id VARCHAR(10),
  product_id VARCHAR(10),
  quantity INT,
  price DECIMAL(12,2),
  INDEX idx_order_items_order (order_id),
  INDEX idx_order_items_product (product_id)
);

-- 7. Bảng cart_events
CREATE TABLE cart_events (
  event_id VARCHAR(10) PRIMARY KEY,
  user_id VARCHAR(10),
  product_id VARCHAR(10),
  event_type VARCHAR(20),
  created_at DATETIME,
  action VARCHAR(50),
  quantity INT,
  timestamp DATETIME,
  INDEX idx_cart_events_user (user_id),
  INDEX idx_cart_events_product (product_id)
);

-- 8. Bảng tracking_events
CREATE TABLE tracking_events (
  track_id VARCHAR(10) PRIMARY KEY,
  user_id VARCHAR(10),
  product_id VARCHAR(10),
  action VARCHAR(50),
  created_at DATETIME,
  event_type VARCHAR(50),
  x INT,
  y INT,
  scroll_depth INT,
  duration INT,
  timestamp DATETIME,
  INDEX idx_tracking_events_user (user_id),
  INDEX idx_tracking_events_product (product_id)
);
-- 9. Bang session
CREATE TABLE sessions (
    session_id VARCHAR(50) PRIMARY KEY,
    user_id VARCHAR(10),
    device VARCHAR(50),
    created_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


ALTER TABLE orders
ADD CONSTRAINT fk_orders_users
FOREIGN KEY (user_id) REFERENCES users(user_id);
ALTER TABLE order_items
ADD CONSTRAINT fk_order_items_orders
FOREIGN KEY (order_id) REFERENCES orders(order_id),
ADD CONSTRAINT fk_order_items_products
FOREIGN KEY (product_id) REFERENCES products(product_id);
ALTER TABLE cart_events
ADD CONSTRAINT fk_cart_events_users
FOREIGN KEY (user_id) REFERENCES users(user_id),
ADD CONSTRAINT fk_cart_events_products
FOREIGN KEY (product_id) REFERENCES products(product_id);
ALTER TABLE tracking_events
ADD CONSTRAINT fk_tracking_events_users
FOREIGN KEY (user_id) REFERENCES users(user_id),
ADD CONSTRAINT fk_tracking_events_products
FOREIGN KEY (product_id) REFERENCES products(product_id);
ALTER TABLE stats
ADD CONSTRAINT fk_stats_products
FOREIGN KEY (product_id) REFERENCES products(product_id);
ALTER TABLE recommendations
ADD CONSTRAINT fk_recommendations_products
FOREIGN KEY (product_id) REFERENCES products(product_id);

-- Này là tôi bổ sung thêm trường password dô user nha ae
USE shopdb;
ALTER TABLE users
ADD COLUMN password VARCHAR(255) NOT NULL DEFAULT '';
UPDATE shopdb.users
SET password = CONCAT('pw_', user_id)
WHERE user_id LIKE 'U%';
