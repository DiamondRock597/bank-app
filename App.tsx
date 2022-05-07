import { AuthProvider } from './src/providers/AuthProvider';
import { Navigation } from './src/navigation/Navigation';
import { DataProvider } from './src/providers/DataProvider';
import { StoryContainer } from './src/components/screens/home/stories/StoryContainer';

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Navigation />
        <StoryContainer />
      </DataProvider>
    </AuthProvider>
  );
}