import UsersIcon from "@assets/icons/users.svg";
import AmountIcon from "@assets/icons/amount.svg";
import HomeIcon from "@assets/icons/home.svg";
import PollsIcon from "@assets/icons/polls.svg";
import PortfolioIcon from "@assets/icons/portfolio.svg";
import ProfileIcon from "@assets/icons/profile.svg";
import Profile2Icon from "@assets/icons/profile2.svg";
import PulseIcon from "@assets/icons/pulse.svg";
import PointsIcon from "@assets/icons/points.svg";
import SearchIcon from "@assets/icons/search.svg";
import SparksIcon from "@assets/icons/sparks.svg";
import PoolsIcon from "@assets/icons/pools.svg";
import RewardsIcon from "@assets/icons/rewards.svg";
import CommentsIcon from "@assets/icons/comments.svg";
import ShareIcon from "@assets/icons/share.svg";
import ExpandIcon from "@assets/icons/expand.svg";
import LeftArrowIcon from "@assets/icons/leftArrow.svg";
import RightArrowIcon from "@assets/icons/rightArrow.svg";
import AddIcon from "@assets/icons/add.svg";
import ReturnIcon from "@assets/icons/return.svg";
import CloseIcon from "@assets/icons/close.svg";
import SortIcon from "@assets/icons/sort.svg";
import FilterIcon from "@assets/icons/filter.svg";
import VerifiedIcon from "@assets/icons/verified.svg";
import MenuIcon from "@assets/icons/menu.svg";
import ArrowUpIcon from "@assets/icons/arrow_up.svg";
import LikeIcon from "@assets/icons/like.svg";
import DislikeIcon from "@assets/icons/dislike.svg";
import Image from "next/image";

export const icons = {
  users: UsersIcon,
  amount: AmountIcon,
  home: HomeIcon,
  polls: PollsIcon,
  portfolio: PortfolioIcon,
  profile: ProfileIcon,
  profile2: Profile2Icon,
  pulse: PulseIcon,
  points: PointsIcon,
  search: SearchIcon,
  sparks: SparksIcon,
  pools: PoolsIcon,
  rewards: RewardsIcon,
  expand: ExpandIcon,
  share: ShareIcon,
  comments: CommentsIcon,
  leftArrow: LeftArrowIcon,
  rightArrow: RightArrowIcon,
  add: AddIcon,
  return: ReturnIcon,
  close: CloseIcon,
  sort: SortIcon,
  filter: FilterIcon,
  verified: VerifiedIcon,
  menu: MenuIcon,
  arrowUp: ArrowUpIcon,
  like: LikeIcon,
  dislike: DislikeIcon,
};

export const Icon = ({
  name,
  ...props
}: {
  name: keyof typeof icons;
  [key: string]: any;
}) => {
  return <Image src={icons[name]} alt={name} {...props} />;
};
