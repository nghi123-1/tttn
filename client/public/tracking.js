// tracking.js 
(function() {
    let throttleTimeout = null;
    const sendTrackingData = (data) => {
        // Lấy userId từ localStorage-- Login sẽ lưu vào đây
        const userId = localStorage.getItem('user_id') || 'GUEST';
        const payload = {
            ...data,
            user_id: userId,
            timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '), // Định dạng DATETIME MySQL
            created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        };

        fetch('http://localhost:5000/api/tracking/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).catch(err => console.error('Tracking Error:', err));
    };

    // Bắt sự kiện Click
    window.addEventListener('click', (e) => {
        const productElement = e.target.closest('[data-product-id]');
        sendTrackingData({
            event_type: 'click',
            action: 'click_element',
            product_id: productElement ? productElement.dataset.productId : null,
            x: e.pageX,
            y: e.pageY,
            scroll_depth: window.scrollY
        });
    });

    // Bắt sự kiện Mousemove 
    window.addEventListener('mousemove', (e) => {
        if (!throttleTimeout) {
            throttleTimeout = setTimeout(() => {
                sendTrackingData({
                    event_type: 'mousemove',
                    action: 'mouse_hover',
                    x: e.pageX,
                    y: e.pageY,
                    scroll_depth: window.scrollY
                });
                throttleTimeout = null;
            }, 500); // Cứ 0.5s mới gửi 1 lần tọa độ chuột
        }
    });
})();