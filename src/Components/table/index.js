import React, {Component} from 'react';
import { Checkbox, Textfield,FABButton, Icon } from 'react-mdl'

if(process.env.BROWSER){
   const style= require('./styles.less')
}

export default class Table extends Component{

    render(){
        let Head=[];
        for(let key in this.props.data[0]){
            if(key!=='id'){
                Head.push((
                    <th key={key}>{key}</th>
                ))
            }
        }
        let temp=this.props.data.map((item,i)=>{
            return(
                <tr className={item.complete?'bg-complate':null} data-id={item.id} key={i}>
                    <td style={{verticalAlign:'middle'}} key={i}>{i+1}</td>
                    <td style={{verticalAlign:'middle'}}><Checkbox defaultChecked={item.complete}/></td>
                    <td style={{verticalAlign:'middle'}}>
                        <Textfield
                            onChange={() => {}}
                            defaultValue={item.task}
                            label=''
                            style={{width: '100%'}}
                        />
                    </td>
                    <td style={{verticalAlign:'middle',textAlign:'center'}}>
                        <FABButton colored>
                        <Icon name="remove" />
                    </FABButton>
                    </td>
                </tr>
            )
        });

        return(
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    {Head}
                    <th>delete</th>
                </tr>
                </thead>
                <tbody>
                {temp}
                </tbody>
            </table>
        )
    }
}