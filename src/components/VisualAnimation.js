import { BubbleChart, BubbleSeries, Bubble, BubbleLabel, TooltipArea } from 'reaviz';
import { useEffect, useState } from 'react';

const shuffle = (tmpData) => {
    for (var k=tmpData.length-1; k > 0; k--) {
        var l = Math.floor(Math.random() * k);
        var tmp = tmpData[k];
        tmpData[k] = tmpData[l];
        tmpData[l] = tmp;
    }
    return tmpData;
};

const VisualAnimation = ({ item }) => {
    /**
     * Renders the bubbles for the item's rate.
     */
    const [generatedData, setGeneratedData] = useState([]);

    // Rerender the chart whenever the item changes
    useEffect(() => {
        var numberBalls = 0;
        if(item) {
            numberBalls = 1/(item['Rate']/100);
        }

        // generate data on change:
        // total balls: numberBalls - 1
        setGeneratedData([]);
        var c = 0;

        for (var i=0; (i < 200) && (c < (numberBalls-1)); i++) {
            setGeneratedData((arr) => [...arr, { key: '', data: 1}]);
            c++;
        }

        for (var j=0; (j < 200) && (c < (numberBalls-1)); j++) {
            setGeneratedData((arr) => [...arr, { key: '', data: 10}]);
            c+=10;
        }

        while(c < (numberBalls-1)) {
            setGeneratedData((arr) => [...arr, { key: '', data: 20}]);
            c+=20;
        }

        setGeneratedData((arr) => [...arr, { key: '', data: 0.99}]); // winning ball
        
        return () => {
            setGeneratedData([]);
        };
    }, [item]);

    
    return (
        item &&
        <BubbleChart
            width={1000}
            height={1000}
            series={<BubbleSeries 
                colorScheme={(_data, index) => {
                    return _data['data']===0.99 ? 'red' : 'blue';
                }}
                bubble={<Bubble 
                    tooltip={<TooltipArea disabled={true}
                    />}
                />}
                label={<BubbleLabel/>}
            />}
            data={shuffle(generatedData)}
        />
    );
};

export default VisualAnimation;
