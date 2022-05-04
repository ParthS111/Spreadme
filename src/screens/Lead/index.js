
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native'
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
import { connect } from 'react-redux';
import { APIRequest, ApiURL, FILTER, LEAD } from '../../api'
import Profile from '../../Assets/Images/profile.jpg'
import Routes from '../../router/routes'
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
            selectedValue:[],
            filterList:data,
            value:''
        }
        this.setValue = this.setValue.bind(this);
    }

    componentDidMount(){
    this.userLead()
    this.userFilter()

    }
    userFilter = () => {
        let param = {
           
        };
        console.log("partmmmm");
        new APIRequest.Builder()
            .post()
            .setReqId(FILTER)
            .reqURL(ApiURL.filter)
            .jsonParams(param)
            .response(this.onResponseFIlter)
            .error(this.onErrorFilter)
            .build()
            .doRequest();
    }
    onResponseFIlter = (res) => {
        // console.log(res.data.content,'0000');
       
        let array=[]
        for (var item of res.data.content){
            array.push({label:item.name,value:item.name})
            this.setState({filterList:array})
            console.log(array);
        }
       
    }
    onErrorFilter = (err) => {
        console.log(err);
        alert(err.message)
    }
    userLead = () => {
        let param = {
           
        };
        console.log("partmmmm");
        new APIRequest.Builder()
            .post()
            .setReqId(LEAD)
            .reqURL(ApiURL.lead)
            .jsonParams(param)
            .response(this.onResponse)
            .error(this.onError)
            .build()
            .doRequest();
    }
    onResponse = (res) => {
        // console.log(res.data.content[0].formProperty,'555');
       
    }
    onError = (err) => {
        console.log(err);
        alert(err.message)
    }
    setValue(callback) {
        this.setState(state => ({
          value: callback(state.value)
        }),()=>{console.log(this.state.value);});
      }
      goBack=()=>{
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: Routes.Authenticated }],
        });
        this.props.navigation.push("Filter")
      }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 0.1 }}>
                    <Header  title={'Lead Lasting'}
                    BackBtn={()=>this.goBack()}
                     url={Profile} />
                </View>
                <View style={[styles.center, { flex: 0.3,}]}>
                    <Card  style={{zIndex:10}}>
                        <View style={{zIndex:10,elevation:10, width: ThemeUtils.relativeWidth(80), paddingHorizontal:10 ,paddingVertical:8}}>
                            <DropDownPicker
                                items={this.state.filterList}
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
                                setValue={this.setValue}
                                arrowSize={10}
                                // onChangeItem={item => ¸}
                                arrowColor={Color.ICON_GREY}
                                arrowStyle={{ marginRight: 10 }}

                            />
                        </View>
                    </Card>
                    <View style={{width:ThemeUtils.relativeWidth(95)}}>
                    <FloatingInputText
                            value={this.state.search}
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

            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return{

    }
}
  


  export default connect(mapStateToProps,null)(LeadListing)
// export default LeadListing