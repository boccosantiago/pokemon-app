import * as C from "./styles";
import usePagination from "@mui/material/usePagination";
import { ReactComponent as LeftArrowIcon } from "../../assets/icon-arrow-left.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/icon-arrow-right.svg";
import { fetchPokemonList } from "../../api/fetchPokemonList";

export default function UsePagination(props) {
  const handleChange = async (e, value) => {
    props.setPage(value);

    props.setLoading(true);
    props.setPokemonList(await fetchPokemonList(value));
    props.setLoading(false);

    window.scrollTo({
      top: props.searchBarRef.current.offsetTop - 56,
    });
  };

  const { items } = usePagination({
    count: 10,
    siblingCount: 0,
    page: props.page,
    onChange: handleChange,
  });

  return (
    <nav>
      <C.Pagination>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = <C.Ellipsis>...</C.Ellipsis>;
          } else if (type === "page") {
            children = (
              <C.Button {...item} selected={selected}>
                {page}
              </C.Button>
            );
          } else {
            children = (
              <C.Button {...item} navigation>
                {type === "previous" ? <LeftArrowIcon /> : <RightArrowIcon />}
              </C.Button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </C.Pagination>
    </nav>
  );
}
