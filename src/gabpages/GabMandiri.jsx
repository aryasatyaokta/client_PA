import { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { earnPoints_Number} from '../helper/helper';

export default function GabMandiri() {
  
  const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)
  const earnPoints = earnPoints_Number(result, answers, 20)
  const navigate = useNavigate();

  useEffect(() => {
    // Check if pretest result is less than 80
    if (earnPoints < 80) {
      console.log("Earn Points:", earnPoints);
      navigate('/lat-mandiri', { replace: true });
    } else {
      navigate('/latihan-mandiri', { replace: true });
    }
  }, [earnPoints, navigate]);

  // Render nothing here, as the navigation is handled in useEffect
  return null;
}
