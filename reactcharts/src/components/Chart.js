import React from 'react'
import {Bar,Line,Pie} from 'react-chartjs-2'



class Chart extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            chartData: this.props.chartData
        }

    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right'
    }

    render(){
        return(
            <div className="chart">
            <Bar
                data={this.props.chartData}
                options={{
                    title:{
                        display:this.props.displayTitle,
                        text:'Largest Cities in Massachusetts',
                        fontSize:25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }
                 }}
            />
            </div>
        )
    }
}

export default Chart
