'use client' 
import React, {useState, useEffect } from 'react';
import recoder  from "../data/recoder-0.json";
import dslSol from '../data/solver-dsl-0.json';
import final_result from "../data/final_result.json";
import dbscan_result from "../data/dbscan_result.json";
import DropDownSelect from '../components/DropDownSelector';
import FancyList from "../components/FancyList";
import BitmapRender from '../components/BitmapRender';



function ArcRender() {
}

function RecoderRender() {

}

function BarSelector() {

}

function SearcherRender() {


}


function Home () {
        const [dbscanIdx, setDbscanIdx] = useState(0)
	const [callCluster, setCallCluster] = useState([]);
	const [vis, setVis] = useState([]);
	const [curQAs, setCurQAs] = useState([]);

	let dbscanData = dbscan_result
	let dbsIdxArr = Object.entries(dbscanData).map(([key,value]) => {
	  	return key
	})
	let totData = Object.entries(recoder).map(([key, value]) => {
		//  {id, tot_time_takes, each_recoder, train_count, time_takes}
		return value
	})
        const bitmapData = [
          [0, 1, 2, 3, 4],
          [4, 3, 2, 1, 0],
          [1, 2, 3, 4, 0],
          [2, 3, 4, 0, 1],
          [3, 4, 0, 1, 2],
        ];
	const takeId = (id: String) => id.slice(6,);
	useEffect(()=>{
		const data = dbscanData[dbscanIdx].map((idx)=> {
		  return recoder[takeId(idx)]
		})
		setCurQAs([...data])
		setCallCluster(dbscanData[dbscanIdx])
		console.log(dbscanIdx,curQAs)
	}, [dbscanIdx])
	useEffect(()=> {
		async function a () {

		const data = await curQAs.map((rData) => {
				  const result =  rData.each_recoder.map((bData) => {
				       return {id: rData.id, data: bData, dsl: dslSol["solve_"+rData.id].map((dslSingle,idx)=><p key={idx}>{dslSingle}</p> )}
	//			       (<div>
	//			         <BitmapRender data={bData.Q} />
	//			         <BitmapRender data={bData.A} />
	 //				</div>
	   //    				)
				  })
				  return result
	       })
	       setVis(data.flat())
		}
	  a();
	},[curQAs]);

	return (
		<div>
		       <DropDownSelect label={"dbsccan"} items={dbsIdxArr} onSelect={setDbscanIdx}/>
                       <div>
                         <h1>Fancy List Example</h1>
                         <FancyList items={callCluster} />
                       </div>
		       <div className="flex">
		       {  vis &&vis.map((data,idx)=>{
	                 return (
				 <div key={idx} className="m-4">
				 <p>{data.id}</p>
			         <BitmapRender data={data.data?.Q} />
		         	 <BitmapRender data={data.data?.A} />
				 {data.dsl}
			 	</div>
				)

		       	})
		       }
		       </div>
		</div>
	)
}

export default Home

