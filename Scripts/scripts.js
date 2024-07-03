// Charts configurations
document.addEventListener('DOMContentLoaded', function() {
    const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
    const ctxOrder = document.getElementById('orderChart').getContext('2d');
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    const ctxProducts = document.getElementById('productsChart').getContext('2d');
    const ctxTarget = document.getElementById('targetChart').getContext('2d');
    const ctxSatisfaction = document.getElementById('satisfactionChart').getContext('2d');

    new Chart(ctxRevenue, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Revenue',
                data: [1200, 1500, 1800, 2000, 2300],
                backgroundColor: 'rgba(52, 152, 219, 0.5)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
            }]
        }
    });

    new Chart(ctxOrder, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Orders',
                data: [50, 60, 70, 80, 90],
                backgroundColor: 'rgba(46, 204, 113, 0.5)',
                borderColor: 'rgba(46, 204, 113, 1)',
                borderWidth: 1
            }]
        }
    });

    new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Completed', 'Pending', 'Cancelled'],
            datasets: [{
                data: [80, 15, 5],
                backgroundColor: ['rgba(46, 204, 113, 1)', 'rgba(241, 196, 15, 1)', 'rgba(231, 76, 60, 1)']
            }]
        }
    });

    new Chart(ctxProducts, {
        type: 'bar',
        data: {
            labels: ['Product A', 'Product B', 'Product C'],
            datasets: [{
                label: 'Sales',
                data: [30, 50, 70],
                backgroundColor: 'rgba(155, 89, 182, 0.5)',
                borderColor: 'rgba(155, 89, 182, 1)',
                borderWidth: 1
            }]
        }
    });

    new Chart(ctxTarget, {
        type: 'bar',
        data: {
            labels: ['Target', 'Reality'],
            datasets: [{
                label: 'Sales',
                data: [200, 180],
                backgroundColor: 'rgba(243, 156, 18, 0.5)',
                borderColor: 'rgba(243, 156, 18, 1)',
                borderWidth: 1
            }]
        }
    });

    new Chart(ctxSatisfaction, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Satisfaction',
                data: [85, 80, 75, 90, 95],
                backgroundColor: 'rgba(52, 73, 94, 0.5)',
                borderColor: 'rgba(52, 73, 94, 1)',
                borderWidth: 1
            }]
        }
    });
});
