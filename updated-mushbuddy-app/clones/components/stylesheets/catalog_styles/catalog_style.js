import { StyleSheet } from 'react-native';

import { COLORS } from '../colors';

const HEADER_HEIGHT = 40;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BG,
    },
    loadingContainer: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    catalogEntryContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: 5,
        paddingLeft: 20,
    },
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderColor: 'transparent',
        overflow: 'hidden',
        marginLeft: 5,
        marginRight: 30,
    },
    image: {
        flex: 1,
        width: 50,
        height: 50,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    headerLine: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginBottom: 2.5,
    },
    headerText: {
        fontSize: 15,
        color: '#222222',
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    italicizedHeaderText: {
        fontSize: 12,
        color: '#666666',
        marginLeft: 5,
        fontStyle: 'italic',
        letterSpacing: 0.15,
    },
    descriptionText: {
        flex: 1,
        fontSize: 10,
        color: '#222222',
        letterSpacing: 0.1,
    },
    headerContainer: {
        marginTop: 10,
        paddingHorizontal: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 7.6,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5,
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.GREY_3,
        height: HEADER_HEIGHT,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowRadius: 2,
        shadowOffset: {width:3,height:3},
        backgroundColor: COLORS.BG,
        marginRight: 20,
    },
    searchInput: {
        marginLeft: 20,
        fontSize: 12,
        width: '85%',
        height: 30,
    },
});