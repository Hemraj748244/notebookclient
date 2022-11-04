const getAllNotes = async () => {
  try {
    const res = await fetch(`${host}/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxYTAxNWY4NmQwOWZiNmU1MGFkZGMyIn0sImlhdCI6MTY2MjY0ODcxOH0.JVE47Mv4P83CSOHK5WgKgCOG0Yiy0XlG88O0ehxgdTY",
      }
    });

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }
    const data = await res.json();
    setNt(fortmatResponse(data));
  } catch (err) {
    setGetResult(err.message);
  }
}






 <Link id="brandname" className="navbar-brand" to="/">
          iNoteBook
        </Link>
        
        
        
        @keyframes tipsy {
  0 {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
}

body {
  font-family: helvetica, arial, sans-serif;
  background-color: #2e2e31;
}

#brandname {
  color: #fffbf1;
  text-shadow: 0 20px 25px #2e2e31, 0 40px 60px #2e2e31;
  font-size: 80px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: -3px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

Link:before,
Link:after {
  content: '';
  padding: .9em .4em;
  position: absolute;
  left: 50%;
  width: 100%;
  top: 50%;
  display: block;
  border: 15px solid red;
  transform: translateX(-50%) translateY(-50%) rotate(0deg);
  animation: 10s infinite alternate ease-in-out tipsy;
}

Link:before {
  border-color: #d9524a #d9524a rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
  z-index: -1;
}

Link:after {
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #d9524a #d9524a;
  box-shadow: 25px 25px 25px rgba(46, 46, 49, .8);
}