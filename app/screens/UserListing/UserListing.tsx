import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {axiosGet} from '../../utils/api.service';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import {colors} from '../../constants/colors';
import {useMachine} from 'xstate/react';
import {userListMachines} from '../../state/machines/userListMachines';

interface UserListingProps {}
const UserListing: React.FC<UserListingProps> = () => {
  const [userListData, setUserListData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [state, send] = useMachine(userListMachines);

  useEffect(() => {
    handleLoadMore();

    return () => {};
  }, []);

  const handleLoadMore = () => {
    send('FETCH');
  };
  const renderItem = ({item}: {item: any}): JSX.Element => {
    return <ProfileCard data={item.node} />;
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={userListData}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItem}
        onEndReachedThreshold={0.1}
        onEndReached={handleLoadMore}
        ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.bgGray,
  },
});
export default UserListing;
