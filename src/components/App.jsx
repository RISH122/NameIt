import  React from "react"
import Header from '../components/Header'
import './App.css'
import SearchBox from "./SearchBox";
import ResultContainer from "./ResultContainer";


const name=require("@rstacruz/startup-name-generator")

class App extends React.Component{
    state={
        headerText:'Name It!',
        headerExpanded:true,
        suggestedNames:[],
    };

    handleInputChange =(inputText)=>{

        this.setState({headerExpanded:!inputText,
        suggestedNames:inputText?name(inputText):[],
        });
    };

    render(){
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} 
                headTitle={this.state.headerText}/>
                <SearchBox onInputchage={this.handleInputChange}/>
                <ResultContainer 
                suggestedNames={this.state.suggestedNames}/>
            </div>
        )
    }
}

export default App