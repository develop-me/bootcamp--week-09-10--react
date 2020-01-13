useEffect(() => {
  // assumes we have a function called dragEnd
  // that does something
  window.addEventListener("mouseup", dragEnd)

  // the returned "clean up" function runs on unmounting a component
  return () => {
    window.removeEventListener("mouseup", dragEnd);
  };
}, []); // only run once
