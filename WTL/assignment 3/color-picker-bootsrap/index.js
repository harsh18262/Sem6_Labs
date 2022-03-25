let colorpicker = document.getElementById('colorpicker');



  setInterval(()=>{
      let color = colorpicker.value;
      document.body.style.backgroundColor = color;
  }
  );