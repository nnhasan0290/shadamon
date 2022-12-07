export const catchAsyncError = (theFunc) => (req, res, nex) => {
    Promise.resolve(theFunc(req, res, nex)).catch(nex);
  };