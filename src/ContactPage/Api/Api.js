import axios from "axios";
// *********** Send email
export const SendEmail = async ({

 name,
  email,
  phone,
  message,
  setSend,
  setError
  
}) => {
  try {
    const datas = { name, email,phone, message };
    let res = await axios.post(`https://comradesbizapi.azurewebsites.net/api/email/contactUs`, datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    setError(error.response.data.msg);
  }
};