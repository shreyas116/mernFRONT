import React, { useEffect, useState,useRef } from "react";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useNavigate } from 'react-router-dom';

import ChartZoom from 'chartjs-plugin-zoom';


ChartJs.register(CategoryScale, LinearScale, BarElement,ChartZoom);
const BarChart = () => {
  const [empData, setEmpData] = useState([]);
  const [selectedOptionId, setSelectedOptionId] = useState("");
  const [list, setlist] = useState([]);
  const [todelete,settodelete]=useState("");
  const navigate = useNavigate();
  const chartRef = useRef(null); 
  const handleDownloadClick = () => {
    if (chartRef.current) {
      // Find the selected data item from empData using selectedOptionId
      const selectedData = empData.find((item) => item._id === selectedOptionId);

      if (selectedData) {
        // Dynamically generate the chart data based on the selectedData
        const chartData = {
          labels: ["Male", "Female"],
          datasets: [
            {
              label: "Male and Female count",
              data: [selectedData.Male, selectedData.Female],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
              borderWidth: 1,
            },
          ],
        };

        // Update the chart data and re-render the chart
        chartRef.current.data = chartData;
        chartRef.current.update();

        // Get the image data URI from the updated chart instance
        const imageData = chartRef.current.toBase64Image();

        // Create a download link with the data URI
        const downloadLink = document.createElement("a");
        downloadLink.href = imageData;
        downloadLink.download = "doughnut_chart.png";
        downloadLink.click();
      } else {
        console.log("Selected data not found.");
      }
    }
  };
  const deleteData = async (id) => {
    try {
      // Make a DELETE request using the fetch function to the specified API endpoint.
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/deleteData/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      // Assuming the API responds with a success message or status, you can handle it here.
      if (response.ok) {
        console.log("Data deleted successfully.");
        // Perform any additional actions after successful deletion if needed.
      } else {
        // If the response status is not 2xx, handle the error accordingly.
        console.log("Failed to delete data:", response.status);
      }
    } catch (error) {
      // If an error occurs during the DELETE request, it will be caught here.
      console.error("Error while deleting data:", error);
    }
   navigate("/");
  };
  

  const handleDeleteClick = () => {
    const idToDelete = todelete; // Replace "todelete" with the actual ID you want to delete.
    deleteData(idToDelete);
  };
// 
const adddata = (idOF) => {
  console.log("I am in function bro")
  // Use the find() method to search for the element with the given idOF
  const single = empData.find((item) => item._id === idOF);

  if (single) {
    // If the element with the given idOF is found, set the list with Male and Female values
    let arr = [single.Male, single.Female];
    setlist(arr);
  } else {
    // If the element with the given idOF is not found, handle the error or show a message.
    console.log("Element not found.");
  }

  console.log("list",list); // This will show the updated value of 'list' (assuming setlist function is asynchronous)
};

  const getAllData = async () => {
    try {
      const getPeople = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getallUsers`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getPeople.json();
      //res
      //console.log("res", res.data);
      setEmpData(res.data);
      
    } catch (error) {
      console.log(error);
    }
   
  };

  useEffect(() => {

    getAllData();

    
  }, );
  
  

  // ... (rest of the code)


  console.log(empData);
  var data = {
    labels: ["Male", "Female"],
    //label:list,
    datasets: [
      {
        label: "Male and Female count",
        data: list,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        mode: 'xy',
      },
    },
  },
};

  return (
    <div className="flex flex-col lg:flex-row h-screen">
  <div className="w-full lg:w-1/2 flex-shrink-0">
    <select
      onChange={(e) => {
        console.log(e.target.value);
        settodelete(e.target.value);
        setSelectedOptionId(e.target.value);
        adddata(e.target.value);
        
      }}
      
      className="w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
    >
    <option> Options</option>
      {empData.map((list) => {
        return (
          <option key={list._id} value={list._id}>
            {list.State}
          </option>
        );
      })}
    </select>
  </div>
  <div className="w-full lg:w-1/2 flex-grow">
    <Bar data={data} options={options} height={200} ref={chartRef}/>
    <div className="mt-2 lg:mt-4 flex flex-wrap justify-center lg:justify-start">
      <button
        onClick={handleDeleteClick}
        className="mb-2 lg:mb-0 lg:mr-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
      >
        Delete
      </button>
     
      <button
            onClick={handleDownloadClick} // Add the onClick handler for the Download button
            className="m-auto border border-black rounded-lg p-1 mx-6 bg-red-500 hover:bg-red-600"
          >
            Download Graph
          </button>
    </div>
  </div>
</div>


  );
};

export default BarChart;
