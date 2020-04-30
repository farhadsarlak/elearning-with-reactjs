import React from 'react';
import Img from "react-image";
import ScaleLoader from 'react-spinners/ScaleLoader';
import config from '../services/config';

const ShowImage = ({image}) => {

    return(
	<Img
	    src={[`${config.api}/${image}`,`https://via.placeholder.com/150×100`]}
	    loader={
		<div style={{textAlign:"center",margin:"0 auto"}}>
		    <ScaleLoader
			loading={true}
			width={10}
			margin={2}
			radius={2}
			height={50}
			color={"teal"}
			style={{textAlign:"center"}}
		    />
		</div>
	    }
	/>
    )
};

export default ShowImage;
