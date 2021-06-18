import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'
import Web3 from 'web3';



class Main extends Component {

  state = { 
    count: 1,
   // imageUrl: 'https://picsum.photos/200'
   tags: ["tag1","tag2","tag3"]
 };

 handleIncrement = () =>{
  //console.log("Increment Clicked",this); //before adding the constructor we cannot access this
 // this.state.count++; this won't work as react will not understand its use
  this.setState({count: this.state.count + 1});
}

  render() {
    return (
      // <div>
            
      //       <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
      //       <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            
      // </div>
      
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>

              <div className="card mb-3 mx-auto bg-dark" style={{ maxWidth: '512px' }}>
                <h2 className="text-white text-monospace bg-dark"><b><ins>Share File</ins></b></h2>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >
                      <div className="form-group">
                        <br></br>
                          <input
                            id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-control text-monospace"
                            placeholder="description..."
                            required />
                      </div>
                      <p className="text-white text-monospace bg-dark">{ this.props.acc }</p>
                    <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/>
                    <button type="submit" className="btn-primary btn-block"><b>Upload!</b></button>
                  </form>
              </div>

              <p>&nbsp;</p>
              
              <table className="table-sm table-bordered text-monospace" style={{ width: '1000px', maxHeight: '450px'}}>
                <thead style={{ 'fontSize': '15px' }}>
                  <tr className="bg-dark text-white">
                    <th scope="col" style={{ width: '10px'}}>id</th>
                    <th scope="col" style={{ width: '200px'}}>name</th>
                    <th scope="col" style={{ width: '230px'}}>description</th>
                    <th scope="col" style={{ width: '120px'}}>type</th>
                    <th scope="col" style={{ width: '90px'}}>size</th>
                    <th scope="col" style={{ width: '90px'}}>date</th>
                    <th scope="col" style={{ width: '120px'}}>uploader/view</th>
                    <th scope="col" style={{ width: '120px'}}>hash/view/get</th>
                  </tr>
                </thead>
                { this.props.files.map((file, key) => {
                  return(
                    <thead style={{ 'fontSize': '12px' }} key={key}>
                      <tr>
                        <td>{file.fileId}</td>
                        <td>{file.fileName}</td>
                        <td>{file.fileDescription}</td>
                        <td>{file.fileType}</td>
                        <td>{convertBytes(file.fileSize)}</td>
                        <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        <td>
                          <a
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,10)}...
                          </a>
                          
                         </td>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.fileHash.substring(0,10)}...
                          </a>
                        </td>
                      </tr>
                    </thead>
                  )
                })}
              </table>
              <button type="submit" className="btn-primary">Accept</button>
              <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
             <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
}

formatCount(){
    const {count} = this.state;
    return count === 0 ? 'Zero' : count;
}
}

export default Main;
