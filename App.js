import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [cliente, setCliente] = useState('');
  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState('');

  const regPedido = () => {

    //Validar los campos del formulario
    if (!cliente.trim()) {
      setMensaje('Debe ingresar el nombre del cliente');
      return;
    }
    if (!producto.trim()) {
      setMensaje('Debe ingresar un producto');
      return;
    }
    const cantidadNu = parseInt(cantidad);
    const precioNu = parseFloat(precio);

    if (isNaN(cantidadNu) || cantidadNu <= 0) {
      setMensaje('Ingrese una cantidad válida');
      return;
    }
    if (isNaN(precioNu) || precioNu <= 0) {
      setMensaje('Ingrese un precio por unidad válido');
      return;
    }

    const total = cantidadNu * precioNu;

    setMensaje(`Pedido registrado correctamente.\n` +
      ` Cliente: ${cliente}\n` +
      ` Producto: ${producto}\n` +
      ` Cantidad: ${cantidadNu}\n` +
      ` Total a pagar: $${total.toLocaleString()}`
    );
    setContador(contador + 1);
  }

  const limpieza = () => {
    setCliente('');
    setProducto('');
    setCantidad('');
    setPrecio('');
    setMensaje('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>MobAgro</Text>
      <Text style={styles.subtitulo}>Bienvenido al sistema de pedidos</Text>


      <TextInput
        placeholder="Nombre del cliente"
        style={styles.input}
        value={cliente}
        onChangeText={setCliente}
      />

      <TextInput
        placeholder="Nombre del producto"
        style={styles.input}
        value={producto}
        onChangeText={setProducto}
      />

      <TextInput
        placeholder="Cantidad"
        style={styles.input}
        keyboardType="numeric"
        value={cantidad}
        onChangeText={setCantidad}
      />

      <TextInput
        placeholder="Precio unitario (COP)"
        style={styles.input}
        keyboardType="numeric"
        value={precio}
        onChangeText={setPrecio}
      />

      <View style={styles.botones}>
        <Button title="Registrar Pedido" color="#014178" onPress={regPedido} />
      </View>

      <View style={styles.botones}>
        <Button title="Limpiar Formulario" color="#03b53b" onPress={limpieza} />
      </View>

      <Text style={styles.mensaje}>{mensaje}</Text>
      <Text style={styles.contador}>Pedidos válidos en la sesión: {contador}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9f6d9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#01780b',
  },
  subtitulo: {
    fontSize: 16,
    color: '#164226',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#01780b',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 12,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  botones: {
    width: '100%',
    marginTop: 15,
    borderRadius: 50,
    overflow: 'hidden',
  },
  mensaje: {
    marginTop: 15,
    fontSize: 14,
    color: 'gray',
    textAlign: 'left',

  },
  contador: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});