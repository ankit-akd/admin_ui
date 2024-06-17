const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3012;

app.use(cors());
const fetchMembers = async () => {
    try{
        const response = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
        return response.data;
    } catch(error){
        console.log('Error in fetching data',error);
        return [];
    }
};

app.get('/api/members', async(req,res) => {
    const members = await fetchMembers();
    res.json(members);
});


app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
});