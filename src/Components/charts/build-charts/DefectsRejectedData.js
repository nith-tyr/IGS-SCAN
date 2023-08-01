
import React, { useRef } from "react";
import { Chart } from 'react-chartjs-2';
import { chartOptions } from '../ChartService';
import GraphTopPanel from "../TopPanel";

const ActivitiesDefectsRejectedData = (props) => {
    const data = props.data
    const chartRef = useRef(null)

    const labels = () => {
        var arr = [];
        data?.activities?.map((d, i) => {
            return arr.push(d.display_name);
        });
        return arr;
    };

    const chartData = {
        labels: labels(),
        datasets: [
            // {
            //     type: 'bar',
            //     label: 'Rejected',
            //     backgroundColor: 'rgba(255, 99, 71, 0.5)',
            //     data: data.activities ? data.activities.map((d) => d.total_defects_rejected) : data.projects?.map((d) => d.total_defects_rejected),
            // },
            {
                type: 'bar',
                label: 'Blocker',
                backgroundColor: 'rgba(255, 128, 66, 1)',
                data: data.activities ? data.activities.map((d) => d.rejected_defects?.blockers) : data.projects?.map((d) => d.rejected_defects?.blockers),
            },
            {
                type: 'bar',
                label: 'Critical',
                backgroundColor: 'rgba(253, 200, 48, 1)',
                data: data.activities ? data.activities.map((d) => d.rejected_defects?.critical) : data.projects?.map((d) => d.rejected_defects?.critical),
            },
            {
                type: 'bar',
                label: 'Major',
                backgroundColor: 'rgba(37, 140, 244, 1)',
                data: data.activities ? data.activities.map((d) => d.rejected_defects?.major) : data.projects?.map((d) => d.rejected_defects?.major),
            },
            {
                type: 'bar',
                label: 'Minor',
                backgroundColor: 'rgba(151, 71, 255, 1)',
                data: data.activities ? data.activities.map((d) => d.rejected_defects?.minor) : data.projects?.map((d) => d.rejected_defects?.minor),
            },
        ]
    };

    return (
        <>
            <GraphTopPanel chartRef={chartRef} data={data} title="Defects Rejected Data" />
            <Chart ref={chartRef} type='bar' options={chartOptions(null, "No. of Defects", false)} data={chartData} />
        </>
    );
};

export default ActivitiesDefectsRejectedData;
