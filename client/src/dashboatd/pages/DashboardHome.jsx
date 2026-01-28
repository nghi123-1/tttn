import React from 'react';

const DashboardHome = () => {
  // Giả sử đây là dữ liệu tổng hợp từ database shopdb
  const summary = [
    { label: 'Tổng lượt truy cập', value: '1,250', color: '#4caf50' },
    { label: 'Số lần Click', value: '850', color: '#2196f3' },
    { label: 'Tỷ lệ thoát', value: '12%', color: '#f44336' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h3>🏠 Tổng quan hệ thống</h3>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {summary.map((item, index) => (
          <div key={index} style={{
            padding: '20px', 
            borderRadius: '8px', 
            backgroundColor: item.color, 
            color: 'white',
            flex: 1,
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h4>{item.label}</h4>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;