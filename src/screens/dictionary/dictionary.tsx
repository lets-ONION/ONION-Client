import { ScrollView, StyleSheet, View } from "react-native";
import OnionCard from "../../components/dictionary/onionCard";

export default function Dictionary() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.dictionaryWrapper}> */}
      <ScrollView contentContainerStyle={styles.dictionaryContent}>
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
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
});
