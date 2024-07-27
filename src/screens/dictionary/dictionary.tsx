import { ScrollView, StyleSheet, View } from "react-native";
import OnionCard from "../../components/dictionary/onionCard";
import { FriendCard } from "../../components/dictionary/friendCard";

export default function Dictionary() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.friendsListWrapper}
        contentContainerStyle={styles.friendsList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <FriendCard
          friend={{
            id: 6,
            profile_image:
              "https://i.namu.wiki/i/jtQmllGb5XztKurgXD3gIH-o874OJN_LrCr37LiIhB6zhWKhWOR6Fy-VeBWtTlJtRXnvfgNkoBq4x__gGM6F6w.webp",
            nickname: "민수",
          }}
        />
        <FriendCard
          friend={{
            id: 6,
            profile_image:
              "https://i.namu.wiki/i/jtQmllGb5XztKurgXD3gIH-o874OJN_LrCr37LiIhB6zhWKhWOR6Fy-VeBWtTlJtRXnvfgNkoBq4x__gGM6F6w.webp",
            nickname: "민수",
          }}
        />
        <FriendCard
          friend={{
            id: 6,
            profile_image:
              "https://i.namu.wiki/i/jtQmllGb5XztKurgXD3gIH-o874OJN_LrCr37LiIhB6zhWKhWOR6Fy-VeBWtTlJtRXnvfgNkoBq4x__gGM6F6w.webp",
            nickname: "민수",
          }}
        />
        <FriendCard
          friend={{
            id: 6,
            profile_image:
              "https://i.namu.wiki/i/jtQmllGb5XztKurgXD3gIH-o874OJN_LrCr37LiIhB6zhWKhWOR6Fy-VeBWtTlJtRXnvfgNkoBq4x__gGM6F6w.webp",
            nickname: "민수",
          }}
        />
        <FriendCard
          friend={{
            id: 6,
            profile_image:
              "https://i.namu.wiki/i/jtQmllGb5XztKurgXD3gIH-o874OJN_LrCr37LiIhB6zhWKhWOR6Fy-VeBWtTlJtRXnvfgNkoBq4x__gGM6F6w.webp",
            nickname: "민수",
          }}
        />
        <FriendCard
          friend={{
            id: 6,
            profile_image:
              "https://i.namu.wiki/i/jtQmllGb5XztKurgXD3gIH-o874OJN_LrCr37LiIhB6zhWKhWOR6Fy-VeBWtTlJtRXnvfgNkoBq4x__gGM6F6w.webp",
            nickname: "민수",
          }}
        />
      </ScrollView>
      <ScrollView
        contentContainerStyle={styles.dictionaryContent}
        showsVerticalScrollIndicator={false}
      >
        <OnionCard
          onion={{
            onion_image:
              "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp",
            onion_type: "양파링",
            amount: 4,
            can_trade: true,
          }}
        />
        <OnionCard
          onion={{
            onion_image:
              "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp",
            onion_type: "양파링",
            amount: 4,
            can_trade: true,
          }}
        />
        <OnionCard
          onion={{
            onion_image:
              "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp",
            onion_type: "양파링",
            amount: 4,
            can_trade: true,
          }}
        />
        <OnionCard
          onion={{
            onion_image:
              "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp",
            onion_type: "양파링",
            amount: 4,
            can_trade: true,
          }}
        />
        <OnionCard
          onion={{
            onion_image:
              "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp",
            onion_type: "양파링",
            amount: 4,
            can_trade: true,
          }}
        />
        <OnionCard
          onion={{
            onion_image:
              "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp",
            onion_type: "양파링",
            amount: 4,
            can_trade: true,
          }}
        />
        <OnionCard
          onion={{
            onion_image:
              "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp",
            onion_type: "양파링",
            amount: 4,
            can_trade: true,
          }}
        />
        <OnionCard
          onion={{
            onion_image:
              "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp",
            onion_type: "양파링",
            amount: 4,
            can_trade: true,
          }}
        />
        <OnionCard
          onion={{
            onion_image:
              "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp",
            onion_type: "양파링",
            amount: 4,
            can_trade: true,
          }}
        />
        <OnionCard
          onion={{
            onion_image:
              "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp",
            onion_type: "양파링",
            amount: 4,
            can_trade: true,
          }}
        />
        <OnionCard
          onion={{
            onion_image:
              "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp",
            onion_type: "양파링",
            amount: 4,
            can_trade: true,
          }}
        />
        <OnionCard
          onion={{
            onion_image:
              "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp",
            onion_type: "양파링",
            amount: 4,
            can_trade: true,
          }}
        />
        <OnionCard
          onion={{
            onion_image:
              "https://i.namu.wiki/i/y7qTOOIL6nIa2cXybk511OASqwAGMgZiNjh6CtErz0ust7MPJaztzSYiypYevehQOjdJc-TQvTctUk7N629V7A.webp",
            onion_type: "양파링",
            amount: 4,
            can_trade: true,
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  dictionaryContent: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  friendsList: {
    flexWrap: "nowrap",
    flexDirection: "row",
    gap: 5,
  },
  friendsListWrapper: {
    paddingLeft: 20,
    paddingVertical: 10,
    marginBottom: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
});
