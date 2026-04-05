import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#0fe89c', '#4a6cf7', '#ffb84d', '#ff4466', '#a78bfa', '#22d3ee', '#fb923c', '#34d399'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#111823',
        border: '1px solid #1c2538',
        borderRadius: 8,
        padding: '10px 14px',
        fontFamily: 'Lexend, sans-serif',
        fontSize: 13,
        color: '#d4dff0',
      }}>
        <div style={{ color: '#667a91', fontSize: 11, textTransform: 'capitalize', marginBottom: 4 }}>{label}</div>
        <div style={{ fontWeight: 600 }}>${payload[0].value.toFixed(2)}</div>
      </div>
    );
  }
  return null;
};

function SpendingChart({ transactions }) {
  const expenses = transactions.filter(t => t.type === 'expense');

  const dataMap = expenses.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc;
  }, {});

  const data = Object.entries(dataMap).map(([name, value]) => ({ name, value }));

  if (data.length === 0) return null;

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }} barSize={28}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: '#667a91', fontFamily: 'Lexend, sans-serif' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            tick={{ fontSize: 11, fill: '#667a91', fontFamily: 'Lexend, sans-serif' }}
            axisLine={false}
            tickLine={false}
            width={48}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
          <Bar dataKey="value" name="Amount" radius={[4, 4, 0, 0]}>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;
