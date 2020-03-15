import React,{useEffect} from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './TitleCard';
import { makeStyles } from '@material-ui/core/styles'
import {getApproveBuildsCount} from '../Services/ServiceNew'
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});
export default function ApprovedCard(props) {
  const ip = "13.127.18.137"
  const [project, setProject] = React.useState([]);
  const [show, setShow] = React.useState(false);
  //   useEffect(() => {
  //   async function fetchData() {
  //     var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  //       targetUrl = 'http://' + ip + ':8000/api/v1/workflow/build/approved_count/'
  //     const res = await fetch(proxyUrl + targetUrl)
  //     res
  //       .json()
  //       .then(res => setProject(res))
  //       .catch(err => setShow(err));
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {

    getApproveBuildsCount().then((res)=>{
      // if(res === 0){
      //   return
      // }
      if(res == 'Token Expired..!!'){
        sessionStorage.removeItem('token')
      sessionStorage.removeItem('role')
      props.history.push('/')
    }
    else{
        console.log(res.clone().json())
    return res.json()
    }
      // console.log(res.clone().json())
      // return res.json()
    }).then((key)=>{
      setProject(key)
      sessionStorage.setItem('approvedcard',key)
    }).catch((err)=>{
      
  })
  },[]);


const handleApproved=()=>{
  props.props.history.push("/ApprovedData");
}
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Approved Builds</Title>
      <Typography component="p" variant="h4">

      </Typography><span><h2>{JSON.stringify(project)}</h2></span>
      <Typography color="textSecondary" className={classes.depositContext}></Typography>
      {/* <div>
        <Link color="primary" href="#" onClick={()=>{handleApproved()}}>
          View Approved
        </Link>
      </div> */}
    </React.Fragment>
  );
}