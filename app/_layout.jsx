import { Stack } from "expo-router";
import { useFonts } from "expo-font"
import * as SecureStore from 'expo-secure-store'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'


export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
  useFonts({
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf')

  })
  return (
 <ClerkProvider  publishableKey={publishableKey}>
    <Stack >
    <Stack.Screen name="index" />
    <Stack.Screen name="login/index"
      options={{
        headerShown:false
      }
    }
    />
    
      </Stack>
      <Text>hello</Text>
      </ClerkProvider>
  )
}
