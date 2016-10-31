import React, {Component} from 'react';

export default class Form extends Component{
    render(){
         const tmp=React.Children.map(this.props.children, (item,i)=>{
             return(
                 <div key={i} className="col-sm-12">
                     {item}
                 </div>
             )
        });
        return(
            <form className="form-horizontal">
                <div className="form-group form-group-lg">
                    {tmp}
                </div>
            </form>
        )
    }
}