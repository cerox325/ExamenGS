import React, {Component} from 'react'


class App extends Component {
  constructor(){
      super();
      this.state = {
          sku: '',
          nombre : '',
          description : '',
          precio : '',
          products: []
      }
      this.addProduct = this.addProduct.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }

    addProduct(e){
        fetch('/api/', {
            method : 'POST',
            body : JSON.stringify(this.state),
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            M.toast({
                html : "Producto Guardado"
            }) 
            this.setState({
                sku:'',
                nombre: '',
                description: '',
                precio: ''
            })
            this.getProducts()
        })
        .catch(err => console.log(err))
        e.preventDefault();

    }

    handleChange(e){
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }


    getProducts(){
        fetch('/api/')
        .then(res => res.json())
        .then(data =>{
            this.setState({products: data})
            console.log(this.state.products)
        })
    }

    componentDidMount(){
        this.getProducts()
    }

    render(){
        return (
            <div>
                <nav className="light-dark darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Examen GS</a>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <h3>Productos</h3>
                                <div className="card-content">
                                    <form onSubmit={this.addProduct}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="sku" value={this.state.sku} type = "number" placeholder="SKU" onChange={this.handleChange}/>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="nombre" value={this.state.nombre} type = "text" placeholder="Nombre" onChange={this.handleChange}/>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea onChange={this.handleChange} value={this.state.description} name="description" placeholder="description del producto" className="materialize-textarea"></textarea>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="precio" type = "number" value={this.state.precio} placeholder="Precio" onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-success darken-4">Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col s7">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                SKU
                                            </th>
                                            <th>
                                                Nombre
                                            </th>
                                            <th>
                                                Descripcion
                                            </th>
                                            <th>
                                                Precio
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.products.map(products => {
                                                return (
                                                    <tr key={products._id}>
                                                       <td> {products.sku} </td> 
                                                       <td> {products.nombre} </td> 
                                                       <td> {products.description} </td> 
                                                       <td> {products.precio} </td> 
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>

                                </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;