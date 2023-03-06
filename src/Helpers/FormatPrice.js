
const FormatPrice = ({price}) => {

   // Numbers over 1000 to separated by commas
   
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  


export default FormatPrice
