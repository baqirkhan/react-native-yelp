import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput } from 'react-native';

const Search = (): JSX.Element => {
    const [query, setQuery] = useState('');
    return (
        <SafeAreaView>
            <View>
                <Text>WHERE DO YOU WANT TO GO?</Text>
            </View>
            <TextInput onChangeText={setQuery} value={query} />
        </SafeAreaView>
    );
};

export default Search;
