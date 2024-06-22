import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type HistorialItem = {
  articulo: string;
  precio: number;
  categoria: string;
  color: string;
};

const HistorialScreen = () => {
  const navigation = useNavigation();
  const [historialData, setHistorialData] = useState<HistorialItem[]>([]);

  useEffect(() => {
    fetchHistorialData();
  }, []);

  const fetchHistorialData = async () => {
    try {
      const response = await fetch('https://jritsqmet.github.io/web-api/fitnes.json');
      const data = await response.json();
      if (data && data.fitness) {
        const mappedData: HistorialItem[] = data.fitness.map((item: any) => ({
          articulo: item.articulo,
          precio: item.precio,
          categoria: item.categoria,
          color: item.color,
        }));
        setHistorialData(mappedData);
      }
    } catch (error) {
      console.error('Error fetching historial data:', error);
    }
  };

  const handleLogout = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <FlatList
          data={historialData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>Categoría: {item.categoria}</Text>
              <Text>Artículo: {item.articulo}</Text>
              <Text>Precio: {item.precio} </Text> 
              <Text>Color: {item.color}</Text>
            </View>
          )}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    paddingVertical: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default HistorialScreen;
