import React from 'react'
import { View } from 'react-native'

interface CenterProps{ //empty object

}

export const Center: React.FC<CenterProps> = ({children}) => { //we are going to have children
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent:'center',        
            }}
            >
                {children}
            </View>
    )
}