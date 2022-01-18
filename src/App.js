import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const NovoPost = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 180px;
  width: 240px;
  border: 1px solid gray;
  margin: 20px;
  padding: 30px;
`;

const arrayPosts =[
  {
    nomeUsuario: 'user1' ,
    fotoUsuario: 'https://picsum.photos/50/50',
    fotoPost: 'https://picsum.photos/200/160'

  },

  {
    nomeUsuario: 'user2' ,
    fotoUsuario: 'https://picsum.photos/51' ,
    fotoPost: 'https://picsum.photos/200/170'
  },

  {
    nomeUsuario: 'user3',
    fotoUsuario: 'https://picsum.photos/52' ,
    fotoPost: 'https://picsum.photos/200/180'
  }
  
]

class App extends React.Component {
  state = {
    posts :
    arrayPosts,
    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: ""

  }

  

  adicionaPost = () => {
    
    const novoPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    };

    this.setState({ 
      posts: [...this.state.posts,novoPost ],
      inputNomeUsuario: "",
      inputFotoUsuario: "",
      inputFotoPost: ""
     });
  };

  changeInputNomeUsuario = (event) => {
    
    this.setState({ inputNomeUsuario: event.target.value });
  };

  changeInputFotoUsuario = (event) => {
    
    this.setState({ inputFotoUsuario: event.target.value });
  };

  changeinputFotoPost = (event) => {
    this.setState({  inputFotoPost: event.target.value });
  };
  


  render() {
    const listaDePosts = this.state.posts.map ((postagem)=>{
      return (
        <Post
          nomeUsuario = {postagem.nomeUsuario}
          fotoUsuario ={postagem.fotoUsuario}
          fotoPost = {postagem.fotoPost}
        />

      
        );
    });
    return (
      <MainContainer>
        <NovoPost>
          <input
           
            value={this.state.inputNomeUsuario}
            onChange={this.changeInputNomeUsuario}
            placeholder={"Nome Usuário"}
          />
          <input
           
            value={this.state.inputFotoUsuario}
            onChange={this.changeInputFotoUsuario}
            placeholder={"Foto do Usuário"}
          />
          <input
            value={this.state.inputFotoPost}
            onChange={this.changeinputFotoPost}
            placeholder={"Foto do Post"}
          />

          <button onClick={this.adicionaPost}>Adicionar Publicação</button>
        </NovoPost>
      
        {listaDePosts}
      
    </MainContainer>
      
    );
  };
}

export default App;
