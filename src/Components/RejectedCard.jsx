import React, { useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './TitleCard';
import {getRejectedBuildsCount} from '../Services/ServiceNew'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function RejectsCard(props) {
  const [project, setProject] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [showData, setShowData] = React.useState(false);
  useEffect(() => {
    getRejectedBuildsCount().then((res)=>{
      if (res.status == '401') {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('role')
        props.history.push('/')
      }
    else{
        console.log(res.clone().json())
    return res.json()
    }
     
    }).then((key)=>{
      setProject(key)
      console.log("rejectbuild",key)
    }).catch((err)=>{
      
  })
   
}, []);
  
  const handleRejected=()=>{
    props.props.history.push("/RejectedData")
  }
  const classes = useStyles();
  return (
    <>
      <Title>Rejected Builds</Title>
      <Typography component="p" variant="h4">

      </Typography><span><h2>{JSON.stringify(project)}</h2></span>
      <Typography color="textSecondary" className={classes.depositContext}></Typography>
      {/* <div>
        <Link color="primary" href="#" onClick={()=>handleRejected()} >
          View Rejected
        </Link>
      </div> */}
    </>
  );
}