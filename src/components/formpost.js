import React, { Component } from 'react'
import axios from 'axios'

export default class formpost extends Component {
    constructor(props){
        super(props)
        this.state = {
            userid: '',
            title: '',
            body: '',
            file: null
        }
    }
    changeHandler =(e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)

    }
    handleFile (e){
        console.log(e.target.files)
        console.log(e.target.files[0])

        let file = e.target.files[0]
        this.setState({file: file})
    }
    handleUpload(e){
        console.log(this.state, 'the state')

        let file =  this.state.file
        let formdata = new FormData()

        formdata.append('image',file)
        formdata.append('name', 'mirza irtiza')

        axios({
            url: '/some/api',
            method: 'POST',
            headers:{
                authorization: 'your token'
            },
            data: formdata

        }).then((res)=>{

        },(err)=>{
            
        })
    }
    render() {
        const { userid, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input 
                        type="text" 
                        name="userid" 
                        value={userid}
                        onChange={this.changeHandler}
                         />
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler} />
                    </div>

                    <div>
                    <label>
                        choose file
                        <input type="file" multiple name="file" onChange={(e)=>this.handleFile(e)} />
                    </label>
                    <button type="button" onClick={(e)=> this.handleUpload(e)}>file upload</button>
                    </div>
                    <button type="submit" onClick={(e)=> this.handleUpload(e)}>submit</button>
                </form>
            </div>
        )
    }
}
