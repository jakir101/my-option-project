import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';

const LineChart = () => {

    const mathMarks = [
        { id: 1, name: "Alice", math: 85 ,physics: 88, chemistry:78},
        { id: 2, name: "Bob", math: 78 ,physics: 87, chemistry:56},
        { id: 3, name: "Charlie", math: 92 ,physics: 68, chemistry:68},
        { id: 4, name: "David", math: 88,physics: 98, chemistry:48 },
        { id: 5, name: "Eva", math: 76,physics: 88, chemistry:95 },
        { id: 6, name: "Frank", math: 95,physics: 49, chemistry:68 },
        { id: 7, name: "Grace", math: 81,physics: 89, chemistry:74 },
        { id: 8, name: "Henry", math: 89,physics: 87, chemistry:90 },
        { id: 9, name: "Isabel", math: 90 ,physics: 68, chemistry:60},
        { id: 10, name: "Jack", math: 87,physics: 69, chemistry:49 }
    ]

    return (
        <div>
            <LChart width={800} height={400} data={mathMarks}>
                <XAxis dataKey='name' ></XAxis>
                <YAxis dataKey='math'></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={'physics'} stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;