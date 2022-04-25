
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Color, ThemeUtils } from '../../utils'
import Label from '../../Components/Label'
import { styles } from './style'
import Header from '../../Components/Header'
import Card from '../../Components/Card'
import DropDownPicker from 'react-native-dropdown-picker';
import DropdwonIcon from '../../Assets/Small_icon/dropdown.png'
import FloatingInputText from '../../Components/FloatingInputText'
import Search from '../../Assets/Small_icon/search.png'
import LeadCard from '../../Components/LeadCard'
const data=[
    {label: 'one', value: 'one'},
    {label: 'two', value: 'two'}
  ]
class LeadListing extends Component {
    constructor(props){
        super(props);
        this.state={
            childGrade:'',
            open:false,
            selectedValue:[]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 0.1 }}>
                    <Header  title={'Lead Lasting'}
                    BackBtn={()=>console.log("knjknjkn")}
                     url={{ uri: 'http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg' }} />
                </View>
                <View style={[styles.center, { flex: 0.3,}]}>
                    <Card  style={{zIndex:10}}>
                        <View style={{zIndex:10,elevation:10, width: ThemeUtils.relativeWidth(80), paddingHorizontal:10 ,paddingVertical:8}}>
                            <DropDownPicker
                                items={data}
                                customArrowDown={() => <Image
                                    source={DropdwonIcon}
                                    resizeMode="contain"
                                    style={styles.dropdownImg}
                                />}
                                customArrowUp={() => <Image
                                    source={DropdwonIcon}
                                    resizeMode="contain"
                                    style={styles.dropdownImg}
                                />}
                                open={this.state.open}
                                setOpen={(e)=>this.setState({open:!this.state.open})}
                                placeholder={this.state.childGrade === '' ? 'Select Value' : ''}
                                style={styles.dropdwonStyle}
                                itemStyle={{ justifyContent: 'flex-start', paddingHorizontal: 8, }}
                                dropDownMaxHeight={ThemeUtils.relativeHeight(22)}
                                placeholderStyle={{ fontSize: 16, color: Color.ONBOARDING_TEXT }}
                                labelStyle={styles.dwLabel}
                                dropDownStyle={styles.dwStyle}
                                setValue={(item) => console.log(item)}
                                arrowSize={10}
                                arrowColor={Color.ICON_GREY}
                                arrowStyle={{ marginRight: 10 }}

                            />
                        </View>
                    </Card>
                    <View style={{width:ThemeUtils.relativeWidth(95)}}>
                    <FloatingInputText
                            value={this.state.search}
                            secureTextEntry={true}
                            keyboardType="default"
                            onChangeText={(search) => this.setState({ search })}
                            icon={Search}
                            bgColor={Color.BACKGROUND}
                            placeholder="Search"
                        />
                        </View>
                    {/* <View style={{ width: ThemeUtils.relativeWidth(90), borderWidth: 1, backgroundColor: Color.BACKGROUND }}></View> */}
                </View>
                <View style={[{ flex: 0.7, alignItems: 'center' }]}>
                                        <LeadCard/>
                </View>

            </View>
        )
    }
}
export default LeadListing