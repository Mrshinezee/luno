/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Picker from '../components/DatePicker';
import Hamburger from '../components/Hambuger';
import Modal from '../components/Model';
// import Selector from '../components/Selector';

const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
  };

const itemWidth = (dimensions.fullWidth* 1/3 -20 );

const SelectGameArea=styled.View`
    display: flex;
    flex-direction: column;
    flex:1;
    padding:80px 10px 10px 10px;
    width:  100%;
`;
const SelectMiddleArea=styled.View`
    display: flex;
    flex-direction: column;
    flex:2;
    padding:10px;
    width:  100%;
`;
const SelectEndArea=styled.View`
    display: flex;
    flex-direction: column;
    flex:1;
    padding:10px;
    width:  100%;
`;

const SelectedArea=styled.View`
    display: flex;
    flex-direction: column;
    padding:10px;
`;

const PickerArea=styled.View`
    display: flex;
    flex-direction: column;
    padding:10px;
`;

const SelectGame=styled.View`
    display: flex;
    flex-direction: row;
    align-self: center;
    flex-wrap: wrap;
}
`;

const PickerColumnOne=styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
`
const PickerColumnTwo=styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin: 15px 0px;
}
`
const MyThumbnail=styled.View`
    display: flex;
    flex-direction: row;
    align-self: center;
    flex-wrap: wrap;
    margin: 10px;
    width: 100px;
    height: 100px;
}
`;

const OpponentAvatar = styled.View`
    display: flex;
    flex-direction: row;
    align-self: center;
    flex-wrap: wrap;
    margin: 10px;
    width: 100px;
    height: 100px;
    position: relative;
`;

const ThumbImage=styled.Image`
    border: 4px solid black;
    border-radius: 50px
    margin: 5px;
    width: 100px;
    height: 100px;
}
`;

const ChooseThumbImage=styled.Image`
    border: 1px solid black;
    border-radius: 50px
    margin: 5px;
    width: 100px;
    height: 100px;
}
`;

const AddIcon = styled.Image`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 60px;
    left: 36px;
}
`;

const CloseIcon = styled.Image`
    width: 40px;
    height: 40px;
}
`;

const ThumbnailArea=styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
`;

const SpecifiedPicker=styled.View`
    margin: 5px;
    background-color: #F7F7F7;
 
}
`;

const SelectGameTitle=styled.Text`
    padding-top: 10px;
`;

const SelectItem=styled.Text`
    padding: 10px;
    margin: 5px;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    width: ${itemWidth}px;
    font-size: 10px;
    color: blue;
    background-color: #F4F8F9;
`;

const ButtonText = styled.Text`
	font-size: 10px;
	color: white;
	text-align: center;
`;

const ButtonContainer = styled.TouchableOpacity`
    width: 150px;
    height: 30px
	padding: 5px;
	border-radius: 10px;	
	background-color: #3359DB;
`;
const CancelSeectedOpponent = styled.TouchableOpacity`
	position: absolute;
    left: 40px;
`;

const ClickableAvatar = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-self: center;
    flex-wrap: wrap;
    margin: 10px;
    width: 100px;
    height: 100px;
    position: relative;
`;


class CreateTrade extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       openModal: false,
    //     };
    //     // autoBind(this);
    // }
    state = {
        openModal: false,
        selectedOpponent: true,
      };

    OpeningModal = () => {
        this.setState({openModal: true });
        console.log('opening',openModal);
    };

    // toggleModal = () => {
    //     const { isVisible } = this.props;
    //     this.setState({ isModalVisible: !isVisible });
    //   };

  render() {
      const { openModal, selectedOpponent } = this.state;
      console.log('opening', openModal);
    return (
    //   <View style={styles.container}>
    //     <Hamburger navigation={this.props.navigation}/>
        <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: dimensions.fullWidth,
        height: dimensions.fullHeight,
        backgroundColor: '#FFFFFF',
      }}>
        <SelectGameArea >
            <SelectGameTitle>
                Choose Game:
            </SelectGameTitle>
            <SelectGame>
                <SelectItem>FIFA</SelectItem>
                <SelectItem>DRAUGHT</SelectItem>
                <SelectItem>LUDO</SelectItem>
                <SelectItem>CARD</SelectItem>
                <SelectItem>CHESS</SelectItem>
            </SelectGame>
        </SelectGameArea>

        <SelectMiddleArea >
            <SelectedArea>
                <SelectGameTitle>
                    Choose Opponent:
                </SelectGameTitle>
                <ThumbnailArea>
                    <MyThumbnail>
                        <ThumbImage  source={require('../assets/Icon/avatar.png')} />
                    </MyThumbnail>
                    {selectedOpponent ? 
                    <OpponentAvatar>
                        <ChooseThumbImage  source={require('../assets/Icon/choose-avater.jpg')} />
                        <CancelSeectedOpponent onPress={() => this.setState({ selectedOpponent: false })} >
                            <CloseIcon  source={require('../assets/Icon/close-icon.png')} />  
                        </CancelSeectedOpponent>
                    </OpponentAvatar>
                    :
                    <ClickableAvatar onPress={() => alert('Open the modal')}>
                        <ChooseThumbImage  source={require('../assets/Icon/choose-avater.jpg')} />
                        <AddIcon  source={require('../assets/Icon/add-icon.png')} />
                    </ClickableAvatar>
                    }
                </ThumbnailArea>
            </SelectedArea>

            <SelectedArea>
                <SelectGameTitle>
                    Choose a moderator:
                </SelectGameTitle>
                <ThumbnailArea>
                    <MyThumbnail>
                        <ThumbImage  source={require('../assets/Icon/avatar.png')} />
                    </MyThumbnail>
                    <ClickableAvatar onPress={() => this.setState({openModal: true })}>
                        <ChooseThumbImage  source={require('../assets/Icon/choose-avater.jpg')} />
                        <AddIcon  source={require('../assets/Icon/add-icon.png')} />
                        <Modal
                         message="Select Moderator" 
                         isVisible={openModal}
                         />
                    </ClickableAvatar>
                </ThumbnailArea>
            </SelectedArea>
        </SelectMiddleArea>

        <SelectEndArea >
            <SelectGameTitle>
                Choose date and time:
            </SelectGameTitle>
            <PickerArea>
                <PickerColumnOne>
                    <SpecifiedPicker>
                        <Picker
                        isCalender='true'
                        format='YYYY-MM-DD'
                        min='2016-05-01'
                        max='2016-05-01'
                        />
                        </SpecifiedPicker>
                    <SpecifiedPicker>
                    <Picker
                        format='HH:mm'
                        min='00:00'
                        max='12:59'
                        />
                    </SpecifiedPicker>
                </PickerColumnOne>
                
                <PickerColumnTwo>
                <ButtonContainer onPress={() => alert('Hi!')} >
                    <ButtonText >Create Challenge</ButtonText>
                </ButtonContainer>
                </PickerColumnTwo>
            </PickerArea>
        </SelectEndArea>
      </View>
    //   </View>
    );
  }
}
export default CreateTrade;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
});
