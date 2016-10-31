import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/todos'
import Form from '../../Components/form'
import Table from '../../Components/table'
import { Tabs , Tab} from 'react-mdl'
import { Link }  from 'react-router';


class Todos extends Component {

    constructor(){
        super();
        this.state={
            filter:'all',
            activeTab: 2
        }
    }
    all(){
        return this.props.todos
    }

    handleNameChange = (val)=> {
        const name = val.target.value;
        this.props.dispatch(action.changeText(name))
    };

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className='App'>
                            <h1 className="text-center">REACT TODOS</h1>
                           <div className="demo-tabs">
                               <Tabs style={{marginBottom:'30px'}} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                                   <Tab onClick={()=>{this.props.history.push('/all')}}>all</Tab>
                                   <Tab onClick={()=>{this.props.history.push('/active')}}>active</Tab>
                                   <Tab onClick={()=>{this.props.history.push('/complated')}}>completed</Tab>
                               </Tabs>
                           </div>
                            <Form>
                                <input className="form-control" type="text" id="todo" name="todo" placeholder="What needs to be done?"/>
                            </Form>
                            <Table data={this[this.state.filter]()}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        todos:state.todos
    }
}

export default connect(mapStateToProps)(Todos)