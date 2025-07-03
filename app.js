
async function loadTable(){
  const res = await fetch('/api/logs');
  const logs = await res.json();

  document.getElementById('count').textContent = `(${logs.length})`;

  new DataTable('#logTable',{
    data: logs,
    columns: [
      { title: 'Time', data: 'ts' },
      { title: 'From', data: 'from' },
      { title: 'Message', data: 'body' }
    ],
    order: [[0,'desc']]
  });
}
loadTable();
setInterval(loadTable,5000);
