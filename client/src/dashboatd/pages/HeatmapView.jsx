import React from 'react';

const HeatmapView = () => {
  return (
    <div style={{ padding: '20px', marginTop: '20px', border: '1px dashed #ccc' }}>
      <h3>🔥 Bản đồ nhiệt (Heatmap)</h3>
      <div style={{ 
        width: '100%', 
        height: '400px', 
        backgroundColor: '#eee', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative'
      }}>
        <p style={{ color: '#888' }}>[ Khu vực này sẽ hiển thị Heatmap.js đè lên giao diện web ]</p>
        
        {/* Giả lập một vài điểm nhiệt mẫu */}
        <div style={{ position: 'absolute', top: '20%', left: '30%', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,0,0,0.5)', filter: 'blur(10px)' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '60%', width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,165,0,0.5)', filter: 'blur(15px)' }}></div>
      </div>
      <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        * Dữ liệu được lấy từ bảng <b>tracking_events</b> trong database.
      </p>
    </div>
  );
};

export default HeatmapView;