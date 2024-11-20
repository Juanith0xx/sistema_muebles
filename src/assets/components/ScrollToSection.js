import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollToSection = ({ sectionId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/#${sectionId}`, { replace: true });
  }, [navigate, sectionId]);

  return null;
};

export default ScrollToSection;
