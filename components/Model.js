import React, { Component } from "react";
import { Button, Text, View, Image , TouchableOpacity, Dimensions, TextInput} from "react-native";
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Modal from "react-native-modal";
import styled from 'styled-components';

const dimensions = {
    fullWidth: Dimensions.get('window').width
  };

const itemWidth = (dimensions.fullWidth - 20 );
console.log('itemWidth', itemWidth);


const ModalView = styled.View`
    display: flex;
    background-color: white;
    margin: 30px 10px;
    flex:1;
    padding:40px 10px 10px 10px;
    position: relative;
    border: 1px solid black;
`;

const ModalHeader = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const SearchContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0px; 
    border: 1px solid #C4C4C4;
    border-radius: 6px;
    padding: 0px 5px;
`;

const OpponentContainer = styled.View`
    display: flex;
    margin: 10px 0px; 
    border: 1px solid #C4C4C4;
`;

const OpponentName = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const CloseIcon = styled.Image`
    width: 40px;
    height: 40px;
    position: absolute;
    left: 290px;
    bottom: 20px;
}
`;

const SearchIcon = styled.Image`
    width: 20px;
    height: 20px;
}
`;

const Search = styled.TextInput`
    height: 50;
    background-color: white;
    flex: 1;
`;

const ButtonText = styled.Text`
	font-size: 10px;
    color: white;
    text-align: center;
`;
const Available = styled.Text`
	font-size: 8px;
    padding: 5px;
`;
const Name = styled.Text`
    padding: 5px;
`;

const ButtonContainer = styled.TouchableOpacity`
    width: 120px;
    height: 30px
	padding: 5px;
	border-radius: 10px;	
    background-color: #3359DB;
    margin: 5px;
    text-align: center;
    padding: 5px;
`;

const Opponent = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
 
const ThumbImage=styled.Image`
    border: 1px solid black;
    border-radius: 25px
    margin: 5px;
    width: 50px;
    height: 50px;
    background-color: #3359DB;
}
`;
export default class ModalTester extends Component {
  state = {
    isModalVisible: false,
    selected: false,
  };

//   static getDerivedStateFromProps(nextProps, prevState){
//     if(nextProps.isVisible!==prevState.isModalVisible){
//       return { isModalVisible: nextProps.isVisible};
//    }
//    else return null;
//  }

 componentDidUpdate(prevProps, prevState) {
    if(prevProps.isVisible!==prevState.isModalVisible){
      //Perform some operation here
      this.setState({isModalVisible: prevProps.isVisible});
    }
  }

  componentDidMount() {
    let { isVisible } = this.props;
    this.setState({ isModalVisible: isVisible });
  }
 
//   setModal = () => {
//     let { isVisible } = this.props;
//     this.setState({ isModalVisible: isVisible });
//   }

  toggleModal = () => {
    this.setState({ isModalVisible: false });
  };
 
  render() {
    const { message } = this.props;
    const Opponentlist = [
        {
            "name":"Ijeomah Shine",
            "url": "Ijeomah Shine",
            "avail": "available",
    
        },
        {
            "name":"Daniel Anyaegbu",
            "url": "Daniel Anyaegbu",
            "avail": "unavailable",
    
        },
        {
            "name":"Mark Adeniran",
            "url": "Mark Adeniran",
            "avail": "available",
    
        },

    ];
    console.log('doublecheck', this.state.isModalVisible )
    return (
      <View style={{ flex: 1 }}>
        {/* <Button 
            title="Show modal" 
            onPress={this.toggleModal} 
        /> */}
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <ModalView>
                <TouchableOpacity onPress={() => this.setState({ isModalVisible: false })} >
                    <CloseIcon  source={require('../assets/Icon/close-icon.png')} />  
                </TouchableOpacity>
                <View>
                    <ModalHeader>
                        <Text>{message}:</Text>
                        <ButtonContainer onPress={() => alert('Hi!')} >
                            <ButtonText >Add Opponent</ButtonText>
                        </ButtonContainer>
                    </ModalHeader>
                    <SearchContainer>
                        {/* <FormInput/> */}
                        <Search
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                        <SearchIcon  source={require('../assets/Icon/icons-search-black.png')} />  
                    </SearchContainer>
                    <OpponentContainer>
                        {Opponentlist.map(opponent => <Opponent 
                            onPress={() => alert('Hi!')}>
                            <OpponentName>
                                <ThumbImage/>
                                <Name>{opponent.name}</Name>
                            </OpponentName>
                            <View>
                                <Available>{opponent.avail}</Available>
                            </View>
                        </Opponent>)}
                    </OpponentContainer>
                </View>
                {/* <Button 
                    title="Hide modal" 
                    onPress={() => this.setState({ isModalVisible: false })} 
                /> */}
            </ModalView>
          </View>
        </Modal>
      </View>
    );
  }
}
