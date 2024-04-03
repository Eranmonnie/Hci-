import  { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const dashboardPath = () => {
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!params?.id) {
      navigate("/");
    }
    if (params?.id == "1") {
      navigate(`/dashboard/projects/${params.id}`);
    }
    if (params?.id == "2") {
      navigate(`/dashboard/unreviewed/${params.id}`);
    }
  }, []);
  return <div></div>;
};

export default dashboardPath;
