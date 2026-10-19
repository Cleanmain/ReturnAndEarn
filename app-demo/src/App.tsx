import { Navigate, Route, Routes } from 'react-router-dom';
import { PhoneFrame } from './components/PhoneFrame';
import { HomeScreen } from './screens/HomeScreen';
import { IntroScreen } from './screens/IntroScreen';
import { FindScreen } from './screens/FindScreen';
import { ConditionScreen } from './screens/ConditionScreen';
import { EstimateScreen } from './screens/EstimateScreen';
import { ReadyScreen } from './screens/ReadyScreen';
import { WalletScreen } from './screens/WalletScreen';
import { ImpactScreen } from './screens/ImpactScreen';

export function App() {
  return (
    <PhoneFrame>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/return" element={<IntroScreen />} />
        <Route path="/return/find" element={<FindScreen />} />
        <Route path="/return/:productId/condition" element={<ConditionScreen />} />
        <Route path="/return/:productId/estimate" element={<EstimateScreen />} />
        <Route path="/ready/:returnId" element={<ReadyScreen />} />
        <Route path="/wallet" element={<WalletScreen />} />
        <Route path="/impact" element={<ImpactScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PhoneFrame>
  );
}
