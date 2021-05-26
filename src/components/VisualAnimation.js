import { BubbleChart, BubbleSeries, Bubble, BubbleLabel, TooltipArea } from 'reaviz';
import { range } from 'd3-array';
import { useEffect, useState } from 'react';

const VisualAnimation = ({ item }) => {
    const [numberBalls, setNumBalls] = useState(-1);

    useEffect(() => {
        if(item) {
            setNumBalls(1/(item['Rate']/100));
        }
    }, [item]);

    const generatedData = range(numberBalls-1).map(o => ({
        key: '',
        data: 1
    }));

    generatedData.push({ key: 'w', data: 1});

    return (
        item &&
        <BubbleChart
            width={1000}
            height={1000}
            series={<BubbleSeries 
                animated={false}
                colorScheme={(_data, index) => {
                    return _data['key']==='w' ? 'red' : 'blue';
                }}
                bubble={<Bubble 
                    tooltip={<TooltipArea disabled={true}
                    animated={false}
                    />}
                />}
                label={<BubbleLabel/>}
            />}
            data={generatedData}
        />
    );
};

export default VisualAnimation;
