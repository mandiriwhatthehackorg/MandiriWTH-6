import React, { Component } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';
import { COLORS } from './res/validColors';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';

const survey = [
    {
        questionType: 'Info',
        questionText: 'Selamat datang di Survey Level Resiko, ikuti survey ini untuk mengetahui level risiko kamu'
    },
    // {
    //     questionType: 'TextInput',
    //     questionText: 'Simple Survey supports free form text input',
    //     questionId: 'favoriteColor',
    //     placeholderText: 'Tell me your favorite color!',
    // },
    // {
    //     questionType: 'NumericInput',
    //     questionText: 'It also supports numeric input. Enter your favorite number here!',
    //     questionId: 'favoriteNumber',
    //     placeholderText: '',
    // },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Jika nilai investasi kamu turun 15% dalam sebulan  dengan keadaan pasar yang tak tentu, apa yang kamu lakukan?',
        questionId: 'favoritePet',
        options: [
            {
                optionText: 'Jual Semua',
                value: 'jualsemua'
            },
            {
                optionText: 'Jual Sebagian',
                value: 'jualsebagian'
            },
            {
                optionText: 'Simpan Semua',
                value: 'simpansemua'
            },
            {
                optionText: 'Beli Lagi',
                value: 'belilagi'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Dalam Berinvestasi, apa yang lebih kamu utamakan?',
        questionId: 'favoriteFoods',
        // questionSettings: {
        //     maxMultiSelect: 3,
        //     minMultiSelect: 2,
        // },
        options: [
            {
                optionText: 'Maksimalkan Keuntungan',
                value: 'risktaker'
            },
            {
                optionText: 'Menghindari Kerugian',
                value: 'riskaverse'
            },
            {
                optionText: 'Keduanya sama penting',
                value: 'riskmoderate'
            },
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Apakah anda sudah menikah?',
        questionId: 'favoriteFoods',
        // questionSettings: {
        //     maxMultiSelect: 3,
        //     minMultiSelect: 2,
        // },
        options: [
            {
                optionText: 'Belum, masih single',
                value: 'single'
            },
            {
                optionText: 'Sudah, belum ada tanggungan',
                value: 'notanggungan'
            },
            {
                optionText: 'Sudah, anak 1',
                value: 'anak1'
            },
            {
                optionText: 'Sudah, anak 2 atau lebih',
                value: 'anak2'
            },
        ]
    },
    {
        questionType: 'Info',
        questionText: 'Terimakasih telah mengisi survey, klik Selesai untuk lihat hasilnya'
    },
];

export class SurveyScreen extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: GREEN,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Survey Risiko',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = { backgroundColor: 'white' };
    }

    onSurveyFinished(answers) {
        /**
         *  By using the spread operator, array entries with no values, such as info questions, are removed.
         *  This is also where a final cleanup of values, making them ready to insert into your DB or pass along
         *  to the rest of your code, can be done.
         *
         *  Answers are returned in an array, of the form
         *  [
         *  {questionId: string, value: any},
         *  {questionId: string, value: any},
         *  ...
         *  ]
         *  Questions of type selection group are more flexible, the entirity of the 'options' object is returned
         *  to you.
         *
         *  As an example
         *  {
         *      questionId: "favoritePet",
         *      value: {
         *          optionText: "Dogs",
         *          value: "dog"
         *      }
         *  }
         *  This flexibility makes SelectionGroup an incredibly powerful component on its own. If needed it is a
         *  separate NPM package, react-native-selection-group, which has additional features such as multi-selection.
         */

        const infoQuestionsRemoved = [...answers];

        // Convert from an array to a proper object. This won't work if you have duplicate questionIds
        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }

        this.props.navigation.navigate('SurveyResult', { surveyAnswers: answersAsObj });
    }

    /**
     *  After each answer is submitted this function is called. Here you can take additional steps in response to the
     *  user's answers. From updating a 'correct answers' counter to exiting out of an onboarding flow if the user is
     *  is restricted (age, geo-fencing) from your app.
     */
    onAnswerSubmitted(answer) {
        switch (answer.questionId) {
            case 'favoriteColor': {
                if (COLORS.includes(answer.value.toLowerCase())) {
                    this.setState({ backgroundColor: answer.value.toLowerCase() });
                }
                break;
            }
            default:
                break;
        }
    }

    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={'#0A5C78'}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
                    title={'Mundur'}
                />
            </View>
        );
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={'#0A5C78'}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
                    title={'Lanjut'}
                />
            </View>
        );
    }

    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'Selesai'}
                    onPress={onPress}
                    disabled={!enabled}
                    color={'#0A5C78'}
                />
            </View>
        );
    }

    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? '#0A5C78' : '#828282'}
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }

    renderTextBox(onChange, placeholder, value) {
        return (
            <View>
                <TextInput
                    style={styles.textBox}
                    onChangeText={text => onChange(text)}
                    numberOfLines={3}
                    underlineColorAndroid={'white'}
                    placeholder={placeholder}
                    placeholderTextColor={'rgba(184,184,184,1)'}
                    value={value}
                    multiline
                    blurOnSubmit
                    returnKeyType='done'
                />
            </View>
        );
    }

    renderNumericInput(onChange, value) {
        return (<TextInput
            style={styles.numericInput}
            onChangeText={text => { onChange(text); }}
            underlineColorAndroid={'white'}
            placeholderTextColor={'rgba(184,184,184,1)'}
            value={String(value)}
            keyboardType={'numeric'}
            maxLength={3}
        />);
    }

    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={[styles.background, { backgroundColor: this.state.backgroundColor }]}>
                <View style={styles.container}>
                    <SimpleSurvey
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                        renderTextInput={this.renderTextBox}
                        renderNumericInput={this.renderNumericInput}
                        renderInfo={this.renderInfoText}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        height: 30,
        width: 140,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
    },
    surveyContainer: {
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'white',
        alignContent: 'center',
        borderRadius: 10,
        padding: 5,
        shadowColor: '#00000021',
        shadowOffset: {
          width: 1, height: 1
        },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        // Android
        elevation: 3,
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    navButtonText: {
        margin: 10,
        fontSize: 20,
        color: 'white',


        width: 'auto'
    },
    answers: {
        alignSelf: 'center',
        marginBottom: 10,
    },
    navigationButton: {

        minHeight: 40,
        backgroundColor: GREEN,
        padding: 0,
        borderRadius: 100,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,

        padding: 10,
        fontFamily: 'Lato-Regular',
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    numericInput: {
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,1)',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginLeft: 10,
        marginRight: 10
    },
    infoText: {
        marginBottom: 20,
        fontSize: 20,
        marginLeft: 10
    },
});
