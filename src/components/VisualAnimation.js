import { BubbleChart, BubbleSeries, Bubble, BubbleLabel, TooltipArea } from 'reaviz';
import { range } from 'd3-array';
import { useEffect, useState } from 'react';

const VisualAnimation = ({ item }) => {
    /**
     * Render the bubbles for the item's rate.
     */
    const [numberBalls, setNumBalls] = useState(-1);

    // Rerender the chart whenever the item changes
    useEffect(() => {
        if(item) {
            setNumBalls(1/(item['Rate']/100));
        }
    }, [item]);

    const generatedData = range(numberBalls-1).map(o => ({
        key: '',
        data: 1
    })); // dummy balls

    generatedData.push({ key: '', data: 0.99}); // winning ball

    return (
        item &&
        <BubbleChart
            width={1000}
            height={1000}
            series={<BubbleSeries 
                animated={false}
                colorScheme={(_data, index) => {
                    return _data['data']===0.99 ? 'red' : 'blue';
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
